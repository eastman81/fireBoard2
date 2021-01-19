// Function to sort firefighters A-Z
export function sortStaff(firefighters) {
  const sortedStaff = firefighters.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return sortedStaff;
}
