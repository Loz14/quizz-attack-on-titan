
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
                <img style={{
                    display: 'block',
                    maxWidth: '207px',
                    margin: '0 auto 30px'}} src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png" alt="Trophy" />
                <br />
                <p>Parabéns {name}, você acertou {results.filter((x) => x).length} perguntas!</p>
            </Widget.Content>
        </Widget>
    );
}

export default ResultWidget;