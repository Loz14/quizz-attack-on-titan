
import { DualRing } from 'react-awesome-spinners'
import Widget from '../../components/Widget';
import db from '../../../db.json'

const LoadingWidget = () => {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
        </Widget.Header>

            <Widget.Content>
                <div style={{ textAlign: 'center' }}>
                    <DualRing color={db.theme.colors.primary} />
                </div>
            </Widget.Content>
        </Widget>
    );
}

export default LoadingWidget;