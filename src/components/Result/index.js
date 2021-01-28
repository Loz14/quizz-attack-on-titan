
import { DualRing } from 'react-awesome-spinners'
import Widget from '../../components/Widget';
import db from '../../../db.json'

const ResultWidget = ({ results }) => {
    return (
        <Widget>
            <Widget.Header>
                Resultados
        </Widget.Header>

            <Widget.Content>
                <p>Você acertou {results.filter((x) => x).length} perguntas</p>
            </Widget.Content>
        </Widget>
    );
}

export default ResultWidget;