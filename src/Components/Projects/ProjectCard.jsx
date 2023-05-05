import { Card , Button} from 'antd';
import { useEffect, useState } from 'react';
const { Meta } = Card;

const ProjectCard = ({ project }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (

        <Card
            hoverable
            style={{
            width: 240,
            }}
            className='shadow'
            cover={<img alt={project.title} src={project.imgURL} />}
        >
            <Meta title={project.title} description={project.description}/>
            <Button>Ver Sitio</Button>
        </Card>
    );
};

export default ProjectCard;