var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: "Dia inteiro",
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
  },
  {
    title: "Reunião",
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: "green",
  },
  {
    title: "Almoço",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: "red",
  },
  {
    title: "Almoço com Cliente",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "azure",
  },
  {
    title: "Festa de aniversário",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: "azure",
  },
  {
    title: "Clique para ir no evento",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange",
  },
  {
    title: "Google",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange",
  },
];

export { events };
