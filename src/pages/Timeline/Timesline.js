import EachPost from '../../components/EachPost/EachPost'



const Timeline = () => {
    return (
        <div className="container" style={{ marginTop: '80px' }}>
           <div style={{
               display: 'flex',
               justifyContent: 'center'
           }}>
                <div className='col-lg-7'>

                    <EachPost />
                    <EachPost />
                    <EachPost />
                    <EachPost />
                    <EachPost />
                </div>
           </div>
        </div>
    )
}

export default Timeline;