import "./Widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {
  let data; 


  // temporary 
  const amount = 100; 
  const diff = 20; 

  switch(type){ 

    // Phần về user
    case "user": 
      data={ 
        title: "USERS", 
        isMoney: false, 
        link:"See all user", 
        icon: <PersonOutlineOutlinedIcon className="icon" 
        style={{color: "crimson", 
        backgroundColor: "rgba(255,0,0,0.2)", 
        }}
         />,
      }; 
      break; 

      //Phần về ship
      case "ship": 
      data={ 
        title: "SHIPS", 
        isMoney: false, 
        link:"View all ships", 
        icon: <ShoppingCartIcon className="icon"
        style={{color: "goldenrod", 
        backgroundColor: "rgba(218 ,165,32,0.2)", 
        }} />,
      }; 
      break;

      case "earning": 
      data={ 
        title: "EARNINGS", 
        isMoney: true, 
        link:"View net earnings", 
        icon: <MonetizationOnIcon className="icon"
        style={{color: "greeb", 
        backgroundColor: "rgba(0,128,0,0.2)", 
        }} />,
      }; 
      break;

      case "balance": 
      data={ 
        title: "BALANCE", 
        isMoney: true, 
        link:"See details", 
        icon: <AccountBalanceWalletIcon className="icon" 
        style={{color: "purple", 
        backgroundColor: "rgba(128,0,128,0.2)", 
        }} />,
      }; 
      break;
      default: 
      break; 
  }

  return (
    <div className="widget">
      <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney &&  "$"} {amount}</span>
          <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive" style={{color: "green", 
         
        }}>
        <KeyboardArrowUpOutlinedIcon/>
        {/*  phần % doanh thu tăng hay giảm  */}
        {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget
