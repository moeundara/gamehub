import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlaform = () => useData<Platform>("/platforms/lists/parents");
export default usePlaform;
