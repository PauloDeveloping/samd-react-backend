const express = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')
const routes = express.Router()
const upload = multer(uploadConfig)

const ActivityController = require('../controllers/Activity')
const AddressController = require('../controllers/Address')
const ArticleController = require('../controllers/Article')
const ClassController = require('../controllers/Class')
const ComponentController = require('../controllers/Component')
const CourseController = require('../controllers/Course')

const DocumentController = require('../controllers/Document')
const EixoTecnologicoController = require('../controllers/EixoTecnologico')
const EmployeeController = require('../controllers/Employee')
const EventController = require('../controllers/Event')
const InstitutionController = require('../controllers/Institution')
const LessionController = require('../controllers/Lession')

const NotificationController = require('../controllers/Notification')
const PresenceListController = require('../controllers/PresenceList')
const RoleController = require('../controllers/Role')
const ServiceController = require('../controllers/Service')
const StudentController = require('../controllers/Student')
const TeacherController = require('../controllers/Teacher')
const UserController = require('../controllers/User')



routes.post('/insertActivity', ActivityController.store)
routes.get('/allActivities', ActivityController.index)
routes.put('/showActivity/:activity_id', ActivityController.show)
routes.post('/updateActivity', ActivityController.update)
routes.post('/destroyActivity', ActivityController.destroy)
routes.post('/restoreActivity', ActivityController.restore)


routes.post('/insertAddress', AddressController.store)
routes.get('/allAdresses', AddressController.index)
routes.put('/showAddress/:address_id', AddressController.show)
routes.post('/updateAddress', AddressController.update)
routes.post('/destroyAddress', AddressController.destroy)
routes.post('/restoreAddress', AddressController.restore)


routes.post('/insertArticle', ArticleController.store)
routes.get('/allArticles', ArticleController.index)
routes.put('/showArticle/:article_id', ArticleController.show)
routes.post('/updateArticle', ArticleController.update)
routes.post('/destroyArticle', ArticleController.destroy)
routes.post('/restoreArticle', ArticleController.restore)


routes.post('/insertClass', ClassController.store)
routes.get('/allClasses', ClassController.index)
routes.put('/showClass/:class_id', ClassController.show)
routes.post('/updateClass', ClassController.update)
routes.post('/destroyClass', ClassController.destroy)
routes.post('/restoreClass', ClassController.restore)


routes.post('/insertComp', ComponentController.store)
routes.get('/allComps', ComponentController.index)
routes.put('/showComp/:comp_id', ComponentController.show)
routes.post('/updateComp', ComponentController.update)
routes.post('/destroyComp', ComponentController.destroy)
routes.post('/restoreComp', ComponentController.restore)


routes.post('/insertCourse', CourseController.store)
routes.get('/allCourses', CourseController.index)
routes.put('/showCourse/:course_id', CourseController.show)
routes.post('/updateCourse', CourseController.update)
routes.post('/destroyCourse', CourseController.destroy)
routes.post('/restoreCourse', CourseController.restore)


routes.post('/insertDocument', upload.single('doc_file'), DocumentController.store)
routes.get('/allDocuments', DocumentController.index)
routes.put('/showDocument/:doc_id', DocumentController.show)
routes.post('/updateDocument', upload.single('doc_file'), DocumentController.update)
routes.post('/destroyDocument', DocumentController.destroy)
routes.post('/restoreDocument', DocumentController.restore)


routes.post('/insertEixoTecnologico', EixoTecnologicoController.store)
routes.get('/allEixosTecnologicos', EixoTecnologicoController.index)
routes.put('/showEixoTecnologico/:eixotec_id', EixoTecnologicoController.show)
routes.post('/updateEixoTecnologico', EixoTecnologicoController.update)
routes.post('/destroyEixoTecnologico', EixoTecnologicoController.destroy)
routes.post('/restoreEixoTecnologico', EixoTecnologicoController.restore)


routes.post('/insertEmployee', EmployeeController.store)
routes.get('/allEmployees', EmployeeController.index)
routes.put('/showEmployee/:employee_id', EmployeeController.show)
routes.post('/updateEmployee', EmployeeController.update)
routes.post('/destroyEmployee', EmployeeController.destroy)
routes.post('/restoreEmployee', EmployeeController.restore)

routes.post('/insertEvent', EventController.store)
routes.get('/allEvents', EventController.index)
routes.put('/showEvent/:event_id', EventController.show)
routes.post('/updateEvent', EventController.update)
routes.post('/destroyEvent', EventController.destroy)
routes.post('/restoreEvent', EventController.restore)


routes.post('/insertInstitution', InstitutionController.store)
routes.get('/allInstitutions', InstitutionController.index)
routes.put('/showInstitution/:inst_id', InstitutionController.show)
routes.post('/updateInstitution', InstitutionController.update)
routes.post('/destroyInstitution', InstitutionController.destroy)
routes.post('/restoreInstitution', InstitutionController.restore)


routes.post('/insertLession', upload.single('lession_file'), LessionController.store)
routes.get('/allLessions', LessionController.index)
routes.put('/showLession/:lession_id', LessionController.show)
routes.post('/updateLession', upload.single('lession_file'), LessionController.update)
routes.post('/destroyLession', LessionController.destroy)
routes.post('/restoreLession', LessionController.restore)

routes.post('/PresenceListinsert', PresenceListController.store)
routes.get('/allPresenceLists', PresenceListController.index)
routes.put('/showPresenceList/:presenceList_id', PresenceListController.show)
routes.post('/updatePresenceList', PresenceListController.update)
routes.post('/destroyPresenceList', PresenceListController.destroy)
routes.post('/restorePresenceList', PresenceListController.restore)

routes.post('/insertRole', RoleController.store)
routes.get('/allRoles', RoleController.index)
routes.put('/showRoles/:role_id', RoleController.show)
routes.post('/updateRole', RoleController.update)
routes.post('/destroyRole', RoleController.destroy)
routes.post('/restoreRole', RoleController.restore)


routes.post('/insertService', ServiceController.store)
routes.get('/allServices', ServiceController.index)
routes.put('/showService/:svc_id', ServiceController.show)
routes.post('/updateService', ServiceController.update)
routes.post('/destroyService', ServiceController.destroy)
routes.post('/restoreService', ServiceController.restore)

routes.post('/insertStudent', StudentController.store)
routes.get('/allStudents', StudentController.index)
routes.put('/showStudent/:student_id', StudentController.show)
routes.post('/updateStudent', StudentController.update)
routes.post('/destroyStudent', StudentController.destroy)
routes.post('/restoreStudent', StudentController.restore)


routes.post('/insertTeacher', TeacherController.store)
routes.get('/allTeachers', TeacherController.index)
routes.put('/showTeacher/teacher:_id', TeacherController.show)
routes.post('/updateTeacher', TeacherController.update)
routes.post('/destroyTeacher', TeacherController.destroy)
routes.post('/restoreTeacher', TeacherController.restore)


/*routes.post('/insertNotification', NotificationController.store)
routes.get('/allNotifications', NotificationController.index)
routes.put('/showNotification/:notification_id', NotificationController.show)
routes.post('/updateNotification', NotificationController.update)
routes.post('/destroyNotification', NotificationController.destroy)
routes.post('/restoreNotification', NotificationController.restore) */


routes.get('/allUsers', UserController.index)
routes.put('/showUser/:user_id', UserController.show)
routes.post('/insertUser', upload.single('user_photo'), UserController.store)
routes.post('/updateUser', upload.single('user_photo'), UserController.update)
routes.post('/destroyUser', UserController.destroy)
routes.post('/restoreUser', UserController.restore)
routes.get('/showUserDocs', UserController.showUserDocs)

module.exports = routes

/* 
    routes.post('/insert', Controller.store)
    routes.get('/all', Controller.index)
    routes.put('/show/:_id', Controller.show)
    routes.post('/update', Controller.update)
    routes.post('/destroy', Controller.destroy)
    routes.post('/restore', Controller.restore)
*/