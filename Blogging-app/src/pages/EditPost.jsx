import React, {useEffect, useState} from 'react'
import { Container, PostFrom } from '../components'
import appwriteService from '../appwrite/authconfing'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const[post, setPost] = useState(null)
    const {} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostFrom post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
