const prisma = require("../utils/prisma");

const getMoviesById = async (req, res) => {
  const screenId = req.params.id;

  const screen = await prisma.screen.findMany({
    where: { id: screenId },
    include: { screenings: true },
  });
  if (!screen) {
    const result = { error: "screen not found" };
    return res.status(404).json(result);
  }

  res.json({ data: screen });
};

const createTicket = async (req, res) => {
  const { screeningId, customerId, seats } = req.body;

  const newTicket = await prisma.ticket.create({
    data: {
      screeningId,
      customerId,
      seats: {
        create: seats,
      },
    },
    include: { seats: true, customer: true, screening: true },
  });
  res.json({ data: newTicket });
};

module.exports = {
  getMoviesById,
  createTicket,
};
