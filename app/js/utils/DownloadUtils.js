
import {REACT_APP_URL_USER_SERVICE,REACT_APP_URL_SUPPORT_SERVICE,REACT_APP_URL_FORUM,REACT_APP_URL_GALLERY_SERVICE,
    REACT_APP_CHECKOUT_TEST_URL,REACT_APP_SHOPPING_BASE_URL} from 'react-native-dotenv';
import { getToken } from "../services/Session";
import { empty } from "./Validation";

export let USER_SERVICE = REACT_APP_URL_USER_SERVICE
export let SHOPPING_SERVICE = REACT_APP_SHOPPING_BASE_URL
export let SUPPORT_SERVICE = REACT_APP_URL_SUPPORT_SERVICE
export let GALLERY_SERVICE = REACT_APP_URL_GALLERY_SERVICE;
export let CHECKOUT_URL = REACT_APP_CHECKOUT_TEST_URL
export let FORUM=REACT_APP_URL_FORUM




export async function downloadAttachment(url){
    let USER_SERVICE = REACT_APP_URL_USER_SERVICE;
    let token = await getToken();
      if (!empty(USER_SERVICE) && !empty(token)) {
          return USER_SERVICE+`/download-attachment?token=${token}&path=${url}`
      }
}

export function downloadReciept(url){
    let USER_SERVICE = REACT_APP_URL_USER_SERVICE;
      if (!empty(USER_SERVICE)) {
          return USER_SERVICE+`${url}`
      }
  }

  export async function downloadDefaulterStudentReport(branchId,standardId,divisionId,academicYearId,subjectId,date,groupId){
    let USER_SERVICE = REACT_APP_URL_USER_SERVICE;
    let token = await getToken();
      if (!empty(USER_SERVICE) && !empty(token)) {
          return USER_SERVICE+`/mobile-app/getDefaulterAttendanceReport?token=${token}&branchId=${branchId}&standardId=${standardId}&divisionId=${divisionId}&academicYearId=${academicYearId}&subjectId=${subjectId}&date=${date}&groupId=${groupId}`
      }
}

export async function downloadStudentSummaryAttendanceReport(branchId,standardId,divisionId,academicYearId,subjectId,month,year,groupId,isMonthly){
    let USER_SERVICE = REACT_APP_URL_USER_SERVICE;
    let token = await getToken()
      if (!empty(USER_SERVICE) && !empty(token)) {
          return USER_SERVICE+`/mobile-app/getStudentSummaryAttendanceReport?token=${token}&branchId=${branchId}&standardId=${standardId}&divisionId=${divisionId}&academicYearId=${academicYearId}&subjectId=${subjectId}&month=${month}&year=${year}&groupId=${groupId}&isMonthly=${isMonthly}`
      }
}