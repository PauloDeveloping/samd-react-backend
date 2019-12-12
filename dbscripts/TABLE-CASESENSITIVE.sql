DROP DATABASE IF EXISTS samddb;

CREATE DATABASE IF NOT EXISTS samddb;

USE samddb;

/* ######################################
tabelas sem foreign keys (pr??-populadas) 
####################################### */

CREATE TABLE IF NOT EXISTS inst_tbl /*instituicao / institution */
(
	inst_id INT UNSIGNED AUTO_INCREMENT,
    inst_cod INT(3) UNIQUE NOT NULL,
    inst_name VARCHAR(50) NOT NULL,
    inst_desc VARCHAR(255),
    inst_tel VARCHAR(13) NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    estatus CHAR(1) DEFAULT '',
    updatedat DATETIME,
    CONSTRAINT inst_pk PRIMARY KEY (inst_id)
    
);

CREATE TABLE IF NOT EXISTS svc_tbl /* servi??o / service */
(
	svc_id INT UNSIGNED AUTO_INCREMENT,
    svc_name VARCHAR(50) NOT NULL,
    svc_desc VARCHAR(100) NOT NULL,
    svc_deadline INT(3) NOT NULL,
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT svc_pk PRIMARY KEY (svc_id)
    
);

CREATE TABLE IF NOT EXISTS eixotec_tbl /* eixo tecnol??gico */
(
	eixotec_id INT UNSIGNED AUTO_INCREMENT,
    eixotec_name VARCHAR(50),
    eixotec_desc VARCHAR(255),
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT eixotec_pk PRIMARY KEY (eixotec_id)

);


CREATE TABLE IF NOT EXISTS role_tbl /* cargo / role */
(
	role_id INT UNSIGNED AUTO_INCREMENT,
    role_name VARCHAR(30) NOT NULL,
    role_desc VARCHAR(255),
    role_payment DOUBLE(8,2) NOT NULL,
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT role_pk PRIMARY KEY (role_id)

);

/* ######################################
fim das tabelas sem foreign keys (pr??-populadas) 
####################################### */

/* #################################### */
/* ########### tabelas 1-n ############ */
/* #################################### */

CREATE TABLE IF NOT EXISTS user_tbl /* usuario */
(
	user_id INT UNSIGNED AUTO_INCREMENT,
    user_rm INT(9) UNIQUE NOT NULL,
    user_full_name VARCHAR(60) NOT NULL,
    user_birth_date DATE NOT NULL,
    user_cpf VARCHAR(14) NOT NULL UNIQUE,
    user_rg VARCHAR(13) NOT NULL UNIQUE,
    user_genre ENUM('m', 'f', 'o') NOT NULL,
    user_photo VARCHAR(20) NOT NULL,
    user_email_pers VARCHAR(60) UNIQUE NOT NULL, /* email pessoal*/
    user_email_inst VARCHAR(60) UNIQUE NOT NULL, /* email institucional*/
    user_cel VARCHAR(14) NOT NULL UNIQUE,
    user_tel VARCHAR(13) NOT NULL UNIQUE,
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    inst_fk INT UNSIGNED NOT NULL,
    CONSTRAINT user_fk PRIMARY KEY (user_id),
    CONSTRAINT inst_user_fk FOREIGN KEY (inst_fk) REFERENCES inst_tbl(inst_id)

);

CREATE TABLE IF NOT EXISTS doc_tbl
(
    doc_id INT UNSIGNED AUTO_INCREMENT,
    doc_name VARCHAR(50) NOT NULL,
    doc_desc VARCHAR(255),
    doc_file VARCHAR(40) NOT NULL,
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    user_fk INT UNSIGNED NOT NULL,
    CONSTRAINT doc_pk PRIMARY KEY (doc_id),
    CONSTRAINT doc_user_fk FOREIGN KEY (user_fk) REFERENCES user_tbl(user_id)
);

CREATE TABLE IF NOT EXISTS login_tbl
(
	login_id    INT UNSIGNED AUTO_INCREMENT,
    username    VARCHAR(30) UNIQUE NOT NULL,
    passwd      VARCHAR(128) NOT NULL,
    usertype    ENUM('a','e', 's', 't'), /* admin, employee, student, teacher */
    estatus 	CHAR(1) DEFAULT '',
    createdat  	DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat  	DATETIME,
    user_fk     INT UNSIGNED NOT NULL,
    CONSTRAINT login_pk PRIMARY KEY(login_id),
    CONSTRAINT login_user_fk FOREIGN KEY (user_fk) REFERENCES user_tbl(user_id)
    
);

CREATE TABLE IF NOT EXISTS student_tbl /* estudante/aluno  / student */
(
	student_id INT UNSIGNED AUTO_INCREMENT,
    student_answ VARCHAR(50), /* responsvavel */ 
    user_fk INT UNSIGNED NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY(student_id),
    CONSTRAINT user_student_fk FOREIGN KEY(user_fk) REFERENCES user_tbl(user_id)

);

CREATE TABLE IF NOT EXISTS course_tbl /* curso / course */
(
	course_id INT UNSIGNED AUTO_INCREMENT,
    course_name VARCHAR(60) UNIQUE NOT NULL,
    course_desc VARCHAR(500),
    course_hours INT(4) NOT NULL,
    semestries INT(1) NOT NULL, 
    market VARCHAR(1000),
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    eixotec_fk INT UNSIGNED NOT NULL,
    inst_fk INT UNSIGNED NOT NULL,
    CONSTRAINT course_pk PRIMARY KEY (course_id),
    CONSTRAINT eixotec_course_fk FOREIGN KEY (eixotec_fk) REFERENCES eixotec_tbl(eixotec_id)
);

CREATE TABLE IF NOT EXISTS comp_tbl /* componentes (por modulo. ex: banco de dados 3) / components*/
(
	comp_id INT UNSIGNED AUTO_INCREMENT,
    comp_name VARCHAR(100) NOT NULL,
    comp_desc VARCHAR(255),
    comp_hours INT(3) NOT NULL,
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    course_fk INT UNSIGNED NOT NULL,
    CONSTRAINT comp_pk PRIMARY KEY(comp_id),
    CONSTRAINT comp_course_fk FOREIGN KEY (course_fk) REFERENCES course_tbl(course_id)
    
);


CREATE TABLE IF NOT EXISTS class_tbl /* aula / class */
(
    class_id INT UNSIGNED AUTO_INCREMENT,
    class_date DATE NOT NULL,
    class_desc VARCHAR(255),
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    comp_fk INT UNSIGNED NOT NULL,
    CONSTRAINT class_pk PRIMARY KEY(class_id),
    CONSTRAINT class_comp_fk FOREIGN KEY (comp_fk) REFERENCES comp_tbl(comp_id)
);

CREATE TABLE IF NOT EXISTS lession_tbl  /*  material / lession */
(
    lession_id INT UNSIGNED AUTO_INCREMENT,
    lession_name VARCHAR(50) UNIQUE NOT NULL,
    lession_desc VARCHAR(100),
    lession_size INT NOT NULL,
    lession_ext VARCHAR(10) NOT NULL,
    lession_file VARCHAR(40) NOT NULL,
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME DEFAULT CURRENT_TIMESTAMP,
    comp_fk INT UNSIGNED NOT NULL,
    CONSTRAINT lession_pk PRIMARY KEY (lession_id),
    CONSTRAINT lession_comp_fk FOREIGN KEY (comp_fk) REFERENCES comp_tbl(comp_id)
);


CREATE TABLE IF NOT EXISTS actvt_tbl /* atividade / activity */
(
    actvt_id INT UNSIGNED AUTO_INCREMENT,
    actvt_name VARCHAR(60),
    actvt_desc VARCHAR(255),
    starting_date DATE,
    ending_date DATE,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    class_fk INT UNSIGNED NOT NULL,
    CONSTRAINT actvt_pk PRIMARY KEY (actvt_id),
    CONSTRAINT actvt_class_fk FOREIGN KEY (class_fk) REFERENCES class_tbl(class_id)
);
 
CREATE TABLE IF NOT EXISTS prsclist_tbl /* chamada / lista de presen??a / presence list */
(
    prsclist_id INT UNSIGNED AUTO_INCREMENT,
    prsclist_date DATE,
    prsclist_block INT,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    class_fk INT UNSIGNED NOT NULL,
    CONSTRAINT prsclist_pk PRIMARY KEY (prsclist_id),
    CONSTRAINT prsclist_class_fk FOREIGN KEY (class_fk) REFERENCES class_tbl(class_id)
);

CREATE TABLE IF NOT EXISTS tchr_tbl /* professor / teacher */
(
    tchr_id INT UNSIGNED AUTO_INCREMENT,
    user_fk INT UNSIGNED NOT NULL,
    CONSTRAINT teacher_pk PRIMARY KEY (tchr_id),
    CONSTRAINT teacher_user_fk FOREIGN KEY (user_fk) REFERENCES user_tbl(user_id)
);

CREATE TABLE IF NOT EXISTS empl_tbl /* funcionario / employee */
(
    empl_id INT UNSIGNED AUTO_INCREMENT,
    user_fk INT UNSIGNED NOT NULL,
    CONSTRAINT empl_pk PRIMARY KEY (empl_id),
    CONSTRAINT empl_user_fk FOREIGN KEY (user_fk) REFERENCES user_tbl(user_id)
);

CREATE TABLE IF NOT EXISTS addr_tbl /* endere??o / address */
(
    addr_id INT UNSIGNED AUTO_INCREMENT,
    addr_cep INT NOT NULL,
    addr_name VARCHAR(70) UNIQUE NOT NULL, /* endere???? */
    addr_ngh VARCHAR(40) NOT NULL, /* bairro */
    addr_city VARCHAR(40) NOT NULL, /* cidade */
    addr_state VARCHAR(2) NOT NULL, /* uf (exemplo: sp) */
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    user_fk INT UNSIGNED NOT NULL,
    CONSTRAINT addr_fk PRIMARY KEY (addr_id),
    CONSTRAINT addr_user_fk FOREIGN KEY (user_fk) REFERENCES user_tbl(user_id)
);

CREATE TABLE IF NOT EXISTS event_tbl /* evento */
(
    event_id INT UNSIGNED AUTO_INCREMENT,
    event_title VARCHAR(40) UNIQUE NOT NULL,
    event_desc VARCHAR(255),
    event_start DATE NOT NULL,
    event_end DATE NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    inst_fk INT UNSIGNED NOT NULL,
    CONSTRAINT event_pk PRIMARY KEY(event_id),
    CONSTRAINT event_inst_fk FOREIGN KEY (inst_fk) REFERENCES inst_tbl(inst_id)
);

CREATE TABLE IF NOT EXISTS artcl_tbl /* artigo / publica????o */
(
    artcl_id INT UNSIGNED AUTO_INCREMENT,
    artcl_title VARCHAR(100) UNIQUE NOT NULL,
    artcl_content VARCHAR(2000) NOT NULL,
    artcl_slug VARCHAR(40),
    estatus CHAR(1) DEFAULT '',
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    inst_fk INT UNSIGNED NOT NULL,
    CONSTRAINT artcl_pk PRIMARY KEY (artcl_id),
    CONSTRAINT artcl_inst_fk FOREIGN KEY (inst_fk) REFERENCES inst_tbl(inst_id)
);

CREATE TABLE IF NOT EXISTS ntf_tbl /* notifica????o */
(
    ntf_id INT UNSIGNED AUTO_INCREMENT,
    ntf_title VARCHAR(40),
    ntf_content VARCHAR(1000),
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    inst_fk INT UNSIGNED NOT NULL,
    CONSTRAINT ntf_pk PRIMARY KEY (ntf_id),
    CONSTRAINT ntf_inst_fk FOREIGN KEY (inst_fk) REFERENCES inst_tbl(inst_id)
);

/* #################################### */
/* ###### fim das tabelas 1-n ######### */
/* #################################### */

/* #################################### */
/* ########### tabelas n-n ############ */
/* #################################### */

CREATE TABLE IF NOT EXISTS role_empl_tbl /* cargo funcionaro /  */
(
    empl_fk INT UNSIGNED NOT NULL,
    role_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT roleempl_empl_fk FOREIGN KEY (empl_fk) REFERENCES empl_tbl(empl_id),
    CONSTRAINT roleempl_role_fk FOREIGN KEY (role_fk) REFERENCES role_tbl(role_id)
);

CREATE TABLE IF NOT EXISTS inst_svc_tbl /* servi??o da institui????o / institution service */
(
    inst_fk INT UNSIGNED NOT NULL,
    svc_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT instsvc_inst_fk FOREIGN KEY (inst_fk) REFERENCES inst_tbl(inst_id),
    CONSTRAINT instsvc_svc_fk FOREIGN KEY (svc_fk) REFERENCES svc_tbl(svc_id)
);

CREATE TABLE IF NOT EXISTS inst_course_tbl /* curso da institui????o / institution course */
(
    course_fk INT UNSIGNED NOT NULL,
    inst_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT instcourse_course_fk FOREIGN KEY (course_fk) REFERENCES course_tbl(course_id),
    CONSTRAINT instcourse_inst_fk FOREIGN KEY (inst_fk) REFERENCES inst_tbl(inst_id)
);

CREATE TABLE IF NOT EXISTS tchr_comp_tbl /* componente do professor / teacher component */
(
    tchr_fk INT UNSIGNED NOT NULL,
    comp_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT tchrcomp_tchr_fk FOREIGN KEY (tchr_fk) REFERENCES tchr_tbl(tchr_id),
    CONSTRAINT tchrcomp_comp_fk FOREIGN KEY (comp_fk) REFERENCES comp_tbl(comp_id)
);

CREATE TABLE IF NOT EXISTS course_comp_tbl /* componente do curso / course component */
(
    course_fk INT UNSIGNED NOT NULL,
    comp_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT coursecomp_course_fk FOREIGN KEY (course_fk) REFERENCES course_tbl(course_id),
    CONSTRAINT coursecomp_comp_fk FOREIGN KEY (comp_fk) REFERENCES comp_tbl(comp_id)
);

CREATE TABLE IF NOT EXISTS prsclist_student_tbl /* chamada */
(
    prsclist_fk INT UNSIGNED NOT NULL,
    student_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT prscliststudent_prsclist_id FOREIGN KEY (prsclist_fk) REFERENCES prsclist_tbl(prsclist_id),
    CONSTRAINT prscliststudent_student_id FOREIGN KEY (student_fk) REFERENCES student_tbl(student_id)
);

CREATE TABLE IF NOT EXISTS ntf_actvt_tbl /* notifica????o atividade */
(
    ntf_fk INT UNSIGNED NOT NULL,
    actvt_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT ntfactvt_ntf_fk FOREIGN KEY(ntf_fk)     REFERENCES ntf_tbl(ntf_id),
    CONSTRAINT ntfactvt_actvt_fk  FOREIGN KEY(actvt_fk) REFERENCES actvt_tbl(actvt_id)
);

CREATE TABLE IF NOT EXISTS ntf_event_tbl /* notifica????o evento */
(
    ntf_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    event_fk INT UNSIGNED NOT NULL,
    CONSTRAINT ntfevent_ntf_fk FOREIGN KEY(ntf_fk) REFERENCES ntf_tbl(ntf_id),
    CONSTRAINT ntfevent_event_fk FOREIGN KEY(event_fk) REFERENCES event_tbl(event_id)
);

CREATE TABLE IF NOT EXISTS ntf_lession_tbl /* notifica????o material */
(
    ntf_fk INT UNSIGNED NOT NULL,
    lession_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT ntflession_ntf_fk FOREIGN KEY(ntf_fk) REFERENCES ntf_tbl(ntf_id),
    CONSTRAINT ntflession_lession_fk FOREIGN KEY(lession_fk) REFERENCES lession_tbl(lession_id)
);

CREATE TABLE IF NOT EXISTS ntf_artcl_tbl /* notifica????o artigo */
(
    ntf_fk INT UNSIGNED NOT NULL,
    artcl_fk INT UNSIGNED NOT NULL,
    createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedat DATETIME,
    CONSTRAINT ntfartcl_ntf_fk FOREIGN KEY(ntf_fk) REFERENCES ntf_tbl(ntf_id),
    CONSTRAINT ntfartcl_artcl_fk FOREIGN KEY(artcl_fk) REFERENCES artcl_tbl(artcl_id)
);

--
/* para deletar as tabelas para criar novamente, copie o resultado desta query e execute como um sql*/
