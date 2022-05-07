import { useState } from 'react';
import PostComponent from '../components/post/post';
import ModalForm from '../components/modalForm/modalForm';
import { Button } from 'react-bootstrap';

const Posts = () => {

    const [showModal, setShowModal] = useState(false);

    const mainStyle = {
        backgroundImage: 'url(images/poze/1.png)',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundSize: 'contain',
        flex: 'auto'
    }

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
                {[1,2,3,4,5,6,7,8,9].map(p => (
                    <>
                        <PostComponent
                            title="Super fain!"
                            name="Cristi S"
                            content="Nu exista in Romania musica mai faina ca asta."
                        />
                        <div className="mt-3" />
                        <PostComponent
                            title="Super fain!"
                            name="Cristi S"
                            content="Ad irure Lorem tempor pariatur duis officia Lorem eu quis ex incididunt tempor incididunt. Nulla exercitation commodo dolore sit amet commodo dolor duis deserunt cillum. Pariatur ex eu est anim amet duis commodo aliquip consectetur ullamco amet consequat et ad. Dolore aliquip aliqua labore mollit ullamco nulla veniam anim incididunt voluptate ut. Aliqua cillum sunt mollit enim magna qui enim non ea non ea."
                        />
                    </>
                ))}

            </div>
            <ModalForm showModal={showModal} handleSaveButton={handleSavePost} handleCloseModal={() => setShowModal(false)}/>
        </main>
    )
}

export default Posts;