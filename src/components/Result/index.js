
import { useRouter } from 'next/router';
import Widget from '../../components/Widget';

const ResultWidget = ({ results }) => {
    const router = useRouter()
    const { name } = router.query
    return (
        <Widget>
            <Widget.Header>
                Resultados
        </Widget.Header>

            <Widget.Content>
                <p>Parabéns {name}, você acertou {results.filter((x) => x).length} perguntas!</p>
            </Widget.Content>
        </Widget>
    );
}

export default ResultWidget;