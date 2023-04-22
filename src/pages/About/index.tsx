import { useParams, useSearchParams } from "react-router-dom";
export const About = () => {
  const routeParam = useParams();
  const [searchParam, setSearchParam ] = useSearchParams();
  const { id } = routeParam;
  const type = searchParam.get("type");
  debugger;
  return (
    <div>
      <div>About 页面</div>
      <div>useParam id : {id}</div>
      <div>searchParam type: {type}</div>
    </div>
  );
};
