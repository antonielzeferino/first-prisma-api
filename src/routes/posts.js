const { Router } = require("express");
const prisma = require("../database")

const router = Router()

router.get("/", async (req, res) => {
  const page = +req.query.page || 1; 
  const pageSize = +req.query.pageSize || 5;

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const posts = await prisma.post.findMany({
    skip,
    take,
    orderBy: { createdAt: 'desc' }
  });

  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil(totalPosts / pageSize);

  res.json({
    posts,
    pagination: {
      page,
      pageSize,
      totalPosts,
      totalPages
    }
  });
});

router.post("/", async (req, res) => {
  const newPost = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
      authorId: req.body.authorId,
      tags: {
        connect: req.body.tags
      }
    }
  });
  res.status(201).json(newPost);
});

router.get("/search", async (req, res) => {
  const { title, authorId, published, startDate, endDate } = req.query;

  const filter = {};

  if (title) {
    filter.title = {
      contains: title,
      mode: "insensitive"
    };
  }

  if (authorId) {
    filter.authorId = +authorId;
  }

  if (published) {
    filter.published = published === "true";
  }

  if (startDate || endDate) {
    filter.createdAt = {};
    if (startDate) {
      filter.createdAt.gte = new Date(startDate);
    }
    if (endDate) {
      filter.createdAt.lte = new Date(endDate);
    }
  }

  console.log("Filtro:", filter)

  const posts = await prisma.post.findMany({
    where: filter,
    orderBy: { createdAt: "desc" }
  });

  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await prisma.post.findFirst({
    where: {
      id: Number(req.params.id)
    },
    include: {
      author: true
    }
  })
  res.json(post)
})

router.put("/:id", async (req, res) => {
  const updatedPost = await prisma.post.update({
    data: {
      ...req.body,
      tags: {
        set: req.body.tags
      }
    },
    where: { id: Number(req.params.id) }
  })
  res.json(updatedPost)
})

router.get("/:id", async (req, res) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(req.params.id) },
    include: {
      author: true,
      tags: true
    }
  })
  res.json(post)
})

module.exports = router;