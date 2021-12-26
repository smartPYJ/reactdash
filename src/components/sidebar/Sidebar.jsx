import "./sidebar.css"
import { TableChart, AccountCircle, BarChart, ContactPhone, ContactMail, Message, Feedback, Mail, Report, Analytics, ManageAccounts, Person, Inventory, QrCode, AttachMoney } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Dashboard
          </h3>

          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <AccountCircle className="sidebarIcon" />
              Account
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Statistic
            </li>
            <li className="sidebarListItem">
              <TableChart className="sidebarIcon" />
              Table
            </li>
            <li className="sidebarListItem">
              <ContactPhone className="sidebarIcon" />
              Contact
            </li>
            <li className="sidebarListItem">
              <ContactMail className="sidebarIcon" />
              Email
            </li>

          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
           Quick Menu
          </h3>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Users
            </li>
            
            <li className="sidebarListItem">
              <Inventory className="sidebarIcon" />
             Product
            </li>
            <li className="sidebarListItem">
              <QrCode className="sidebarIcon" />
              Barcode
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
            Transaction
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Report
            </li>

          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Notifications
          </h3>

          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Message className="sidebarIcon" />
             Messages
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Statistic
            </li>
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ContactPhone className="sidebarIcon" />
              Contact
            </li>
            <li className="sidebarListItem">
              <ContactMail className="sidebarIcon" />
              Email
            </li>

          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
          Staff
          </h3>

          <ul className="sidebarList">
           
            <li className="sidebarListItem">
              <ManageAccounts className="sidebarIcon" />
             Manage
            </li>
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Contact
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Report
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
}
