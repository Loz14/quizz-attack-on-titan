
import { useRouter } from 'next/router';
import Widget from '../../components/Widget';
import { Lottie } from '@crello/react-lottie';
import starsAnimation from '../../screens/Quiz/animations/starts.json'
import sadAnimation from '../../screens/Quiz/animations/sad.json'

const ResultWidget = ({ results }) => {
    const router = useRouter()
    const acertos = results.filter((x) => x).length;
    const { name } = router.query
    return (
        <Widget>
            <Widget.Header>
                Resultados
        </Widget.Header>

            <Widget.Content>
                <Lottie
                    width="100%"
                    height="300px"
                    className="lottie-container basic"
                    config={{ animationData: acertos > 2 ? starsAnimation : sadAnimation, loop: true, autoplay: true }}
                />
                <br />
                {acertos > 2 && <p>Parabéns {name}, você acertou {acertos} perguntas!</p> }
                {acertos <= 2 && <p>Boa sorte na próxima {name}, você acertou {acertos} {acertos === 1 ? 'pergunta' : 'perguntas'}!</p> }
            </Widget.Content>
        </Widget>
    );
}

export default ResultWidget;