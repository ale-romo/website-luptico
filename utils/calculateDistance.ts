export const degreesToRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

const getDistance = (coords: [number, number], ref: [number, number]): number => {
  const [lat1, lon1] = coords;
  const [lat2, lon2] = ref;

  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadiusKm * c;
  return parseFloat(distance.toFixed(1)); ;
};

export default getDistance;
