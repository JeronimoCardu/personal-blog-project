export default function formatDate(dateToFormat: string) {
  const date = new Date(dateToFormat);

  const newDate = new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .toLowerCase();

  return newDate;
}
