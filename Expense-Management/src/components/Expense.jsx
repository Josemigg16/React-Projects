import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'
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
const leadingActions = ({ expense, editExpense }) => (
    <LeadingActions>
        <SwipeAction onClick={() => editExpense(expense)}>
            Edit
        </SwipeAction>
    </LeadingActions>
);

const trailingActions = ({ expense, deleteExpense }) => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => deleteExpense(expense)}
        >
            Delete
        </SwipeAction>
    </TrailingActions>
);


const Expense = ({ expense, editExpense, deleteExpense }) => {
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions({ expense, editExpense })}
                trailingActions={trailingActions({ expense, deleteExpense })}
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