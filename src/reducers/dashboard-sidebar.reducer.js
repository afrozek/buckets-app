export default function (state, action) {

    let sidebar = [
      {
        name: "login",
        displayName: "login page",
        disabled: false,
        iconPath: "/assets/images/home-white-icon.svg",
        path: '/auth/login'
      },
        {
          name: "home",
          displayName: "Dash Home",
          disabled: false,
          iconPath: "/assets/images/home-white-icon.svg",
          path: '/dashboard/home'
        },
        {
          name: "account",
          displayName: "My Account",
          disabled: false,
          iconPath: "/assets/images/user-white-icon.svg",
          path: '/dashboard/account'
        },
        {
          name: "settings",
          displayName: "Settings",
          disabled: false,
          iconPath: "/assets/images/settings-white-icon.svg",
          path: '/dashboard/settings'
        },
        {
          name: "search",
          displayName: "Search",
          disabled: false,
          iconPath: "/assets/images/search-white-icon.svg",
          path: '/dashboard/search'
        },
        // {
        //   name: "addGuide",
        //   displayName: "Add Guide",
        //   disabled: false,
        //   iconPath: "/assets/images/add-document-white-icon.svg",
        //   path: "/dashboard/new-guide"
        // },
      ];
    

switch(action.type) {
    case "FETCH_SIDEBAR" :
        return {
            sidebar
        };
    break;
    default:
        return {
            sidebar
        }

}

}