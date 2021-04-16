import Layout from '../components/Layout'

const Blog = ({user}) => {
    console.log(user)
    return (
    
        <Layout>
            <br></br>
        <div clasName="row">
            <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    
                    <h3>Soy el Blog de </h3>
                    <h1>{user.name}</h1>
                    <img src={user.avatar_url}/>
                    <p>{user.bio}</p>
                    <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">BLog</a>
                </div>
            </div>
        </div>
        </Layout>
    
    )
}


export async function getServerSideProps(){
    const res = await fetch('http://prestadores.osunlar.org:88/test/')
    const data = await res.json();

    console.log(data)
    return{
        props:{
            user:data
        }
    }
}

export default Blog;

