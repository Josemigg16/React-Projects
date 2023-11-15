import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import { formatDate } from "../helpers/FormatDate"
import SavingIcon from '../img/icono_ahorro.svg'
import HomeIcon from '../img/icono_casa.svg'
import MiscelaneusIcon from '../img/icono_gastos.svg'
import FoodIcon from '../img/icono_comida.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SuscriptionsIcon from '../img/icono_suscripciones.svg'

const dictIcons = {
    saving: SavingIcon,
    home: HomeIcon,
    miscelaneus: MiscelaneusIcon,
    food: FoodIcon,
    leisure: LeisureIcon,
    health: HealthIcon,
    suscriptions: SuscriptionsIcon
}
const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => console.info('swipe action triggered')}>
            Action name
        </SwipeAction>
    </LeadingActions>
);

const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe delete triggered')}
        >
            Delete
        </SwipeAction>
    </TrailingActions>
);


const Expense = ({ expense }) => {
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra' key={expense.id}>
                    <div className="contenido-gasto">
                        <img src={dictIcons[expense.category]} alt={expense.category} />
                        <div className="descripcion-gasto">
                            <p className="categoria">{expense.category}</p>
                            <p className="nombre-gasto">{expense.name}</p>
                            <p className="fecha-gasto">Added: {''}
                                <span>{formatDate(expense.date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${expense.amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense