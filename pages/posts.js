import { useEffect, useState } from "react";
import PostComponent from "../components/post/post";
import ModalForm from "../components/modalForm/modalForm";
import { Button } from "react-bootstrap";
import { getPosts, setPost } from "../services/api";

const Posts = () => {
  const [showModal, setShowModal] = useState(false);
  const [postsList, setPostsList] = useState([]);

  const fetchPosts = () => {
    getPosts().then((res) => {
        const posts = res.map((p) => ({
          title: p.title,
          fullName: p.fullName,
          details: p.details,
          postDate: p.timestamp.toDate(),
        }));
        setPostsList(posts);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSavePost = (post) => {
    setShowModal(false);
    setPost(post).then(() => {
        setTimeout(fetchPosts, 1000);
    })
  };

  return (
    <main style={{ backgroundColor: "black" }}>
      <div>
        <Button
          className="m-3"
          variant="secondary"
          onClick={() => setShowModal(true)}
        >
          Adauga un commentariu
        </Button>
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ height: "45rem", overflowY: "auto" }}>
        {postsList.map((p) => (
          <div key={p.postDate.toString()}>
            <PostComponent
              title={p.title}
              name={p.fullName}
              content={p.details}
              postDate={`${p.postDate.getDay()+1}/${p.postDate.getMonth()+1}/${p.postDate.getFullYear()}`}
            />
            <div className="mt-3" />
          </div>
        ))}
      </div>
      <ModalForm
        showModal={showModal}
        handleSaveButton={handleSavePost}
        handleCloseModal={() => setShowModal(false)}
      />
    </main>
  );
};

export default Posts;
