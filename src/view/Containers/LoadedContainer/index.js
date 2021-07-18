import {useSelector} from "react-redux";

function LoadedContainer({children}) {

    const {loaded} = useSelector(state => state.auth);

    if (!loaded) return null;

  return children;

}

export default LoadedContainer;