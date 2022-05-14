import { useEffect, useState } from 'react';
import PostComponent from '../components/post/post';
import ModalForm from '../components/modalForm/modalForm';
import { Button } from 'react-bootstrap';
import { getPosts } from '../services/api';

const Posts = () => {

    const [showModal, setShowModal] = useState(false);
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        getPosts().then(res => {
            const posts = res.map(p => ({
                title: p.title,
                fullName: p.fullName,
                details: p.details,
                postDate: p.timestamp.toDate()
            }))
            setPostsList(posts)
        })
    }, [])

    const handleSavePost = () => {
        setShowModal(false)
    }

    return (
        <main style={{ backgroundColor: 'black', height: '98%' }}>
            <div className='m-3'>
                <Button variant="secondary" onClick={() => setShowModal(true)}>Adauga un commentariu</Button>
            </div>
            <hr style={{ color: 'white' }} />
            <div style={{ height: '45rem', overflowY: 'auto' }}>
                {postsList.map((p) => (
                    <div key={p.postDate.toString()}>
                        <PostComponent
                            title={p.title}
                            name={p.fullName}
                            content={p.details}
                            postDate={p.postDate.toString()}
                        />
                        <div className="mt-3" />
                    </div>
                ))}

            </div>
            <ModalForm showModal={showModal} handleSaveButton={handleSavePost} handleCloseModal={() => setShowModal(false)} />
        </main>
    )
}

export default Posts;