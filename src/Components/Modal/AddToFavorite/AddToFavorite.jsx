import { IoHeartOutline} from 'react-icons/io5';
import css from './AddToFavorite.module.css';

const AddToFavorite = () => {
    return (
        <button className={css.button}>Add to <IoHeartOutline className={css.icon}/></button>
    )
}

export default AddToFavorite;


// AddToFavorite from main project
// import PropTypes from 'prop-types';
// import { IoHeartOutline, IoHeart } from 'react-icons/io5';
// import css from './AddToFavorite.module.css';

// const AddToFavorite = ({ onClick, favorite = false, selector = '' }) => {
//   return (
//     <button
//       className={
//         favorite
//           ? `${css.btn} ${css.btnFavorite} ${selector}`
//           : `${css.btn} ${selector}`
//       }
//       type="button"
//       onClick={onClick}
//     >
//       {!favorite && <IoHeartOutline className={css.icon} />}
//       {favorite && <IoHeart className={css.icon} />}
//     </button>
//   );
// };
// export default AddToFavorite;

// AddToFavorite.propTypes = {
//   favorite: PropTypes.bool,
//   onClick: PropTypes.func.isRequired,
//   selector: PropTypes.string,
// };