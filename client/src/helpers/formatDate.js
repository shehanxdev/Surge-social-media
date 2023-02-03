function formatDate(createdAt) {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const diff = currentDate - createdDate;
  const diffInSeconds = diff / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInMonths = diffInDays / 30;
  const diffInYears = diffInMonths / 12;
  console.log(currentDate);
  if (diffInYears >= 1) {
    return Math.floor(diffInYears) + "y" + " ago";
  } else if (diffInMonths >= 1) {
    return Math.floor(diffInMonths) + "mo" + " ago";
  } else if (diffInDays >= 1) {
    return Math.floor(diffInDays) + "d" + " ago";
  } else if (diffInHours >= 1) {
    return Math.floor(diffInHours) + "h" + " ago";
  } else if (diffInMinutes >= 1) {
    return Math.floor(diffInMinutes) + "m" + " ago";
  } else if (diffInSeconds >= 1) {
    return Math.floor(diffInSeconds) + "s" + " ago";
  } else {
    return "Just now";
  }
}
export default formatDate;
