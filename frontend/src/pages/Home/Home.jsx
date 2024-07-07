import { Container, InputFile, InputButton, MessageDiv, UploadForm, DivImages, Imagem } from './HomeStyled'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

function Home() {

    const [ returnmessage, setReturnmessage ] = useState('')
    const [ images, setImages ] = useState([])
    const fileInputRef = useRef(null)

    async function handleSubmit(event){
        event.preventDefault();

        const fileInput = fileInputRef.current
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try{
            const response  = await axios.post('http://localhost:3009/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            })
            
            if (!response.status === 200) {
                throw new Error('erro ao fazer upload da imagem');
            }
            setReturnmessage('imagem lançada com sucesso')
            fileInput.value = null;
            clickInputButton()
        }catch(err){
            setReturnmessage(`erro: ${err.message}`)
            console.log('error no front, ', err)
        }   
    }

    async function clickInputButton(){
        try{
            const response = await axios.get('http://localhost:3009/getimages')

            if(!response){
                console.log('houve erro na busca')
            }
            
            setImages(response.data)
        }catch(err){
            console.log('erro ao buscar imagens, ', err);
        }
    }

    useEffect(() => {
        clickInputButton()
    }, [])

    return(
        <>
        <Container>
            <h1>upload de imagem</h1>
            <UploadForm onSubmit={handleSubmit}>
             <InputFile ref={fileInputRef} type="file" id="fileInput" accept="image/*" required />
             <InputButton type="submit">upload</InputButton>
            </UploadForm>
            <MessageDiv> {returnmessage} </MessageDiv>
        </Container>

        <Container>
            <h1>exibir imagem</h1>
            <DivImages>
                <InputButton onClick={clickInputButton}> get </InputButton>
                <div>
                    {
                        images.map((image, index) => (
                            <Imagem key={index} src={image} alt={`imagem ${index + 1}`}/>
                        ))
                    }        
                </div>

            </DivImages>
        </Container>
        </>
    )
}

export default Home