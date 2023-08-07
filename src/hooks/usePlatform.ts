import usePlaforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlaforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
