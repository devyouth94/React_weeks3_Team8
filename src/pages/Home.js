import React from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/elements/GlassCard";
import Button from "../components/elements/Button"
import "./home.css"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const getedstate = useSelector((state) => state.posts.article);
  const state = getedstate.slice().sort((a, b) => b.id - a.id);

  useEffect(() => {
    dispatch(_getArticle());
  }, [state?.[0]?.id]);

  return (
    <div className="mainWarp">
      <div onClick={() => navigate("/write")} className="btnWarp">
        <Button>Write</Button>
      </div>
      <GlassCard></GlassCard>
    </div>
  );
};

export default Home;
