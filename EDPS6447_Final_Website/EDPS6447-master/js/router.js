
function router(value){
    
    hide_all_views();
    
switch(value) {
      case "view_home":
            console.log("Show the home UI view");
            view_home.classList.remove("d-none");
        break;
      case "view_loading":
            console.log("Show the loading UI view"); 
            view_loading.classList.remove("d-none");
        break;
      case "view_class_newsfeed1":
            console.log("Show the class newsfeed 1 UI view");
            view_class_newsfeed1.classList.remove("d-none");
        break;
      case "view_class_newsfeed2":
            console.log("Show the class newsfeed 2 UI view");
            view_class_newsfeed2.classList.remove("d-none");
        break;
          case "view_class_newsfeed3":
            console.log("Show the class newsfeed 3 UI view");
            view_class_newsfeed3.classList.remove("d-none");
        break;  case "view_gallery1":
            console.log("Show the gallery 1 UI view");
            view_gallery1.classList.remove("d-none");
        break;  case "view_gallery2":
            console.log("Show the gallery 2 UI view");
            view_gallery2.classList.remove("d-none");
        break;  case "view_gallery3":
            console.log("Show the gallery 3 UI view");
            view_gallery3.classList.remove("d-none");
        break;  case "student_spotlight":
            console.log("Show the student spotlight UI view");
            view_student_spotlight.classList.remove("d-none");
        break;  case "view_contact_me":
            console.log("Show the contact me UI view");
            view_contact_me.classList.remove("d-none");
        break;
      default:
            console.log("Error: The requested view is not recognized by the router");
    }
}

function hide_all_views(){
    view_home.classList.add("d-none");
    view_loading.classList.add("d-none");
    view_class_newsfeed1.classList.add("d-none");
    view_class_newsfeed2.classList.add("d-none");
    view_class_newsfeed3.classList.add("d-none");
    view_gallery1.classList.add("d-none");
    view_gallery2.classList.add("d-none");
    view_gallery3.classList.add("d-none");
    view_student_spotlight.classList.add("d-none");
    view_contact_me.classList.add("d-none");