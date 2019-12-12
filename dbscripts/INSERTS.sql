USE SAMDDB;

INSERT INTO INST_TBL (INST_COD, INST_NAME ,INST_DESC, INST_TEL)
VALUES (241, 'Etec de Embu', 'Etec localizada em Embu das Artes', '(11)4040-2020');

INSERT INTO SVC_TBL (SVC_NAME, SVC_DESC, SVC_DEADLINE)
VALUES ('Rematrícula', 'Rematrícula do aluno via sistema', 10);

INSERT INTO EIXOTEC_TBL (EIXOTEC_NAME, EIXOTEC_DESC)
VALUES ('Informação e comunicação', 'Eixo dos cursos voltados a area de desenvolvimento de tecnologias da informação e comunicação.');

INSERT INTO ROLE_TBL (ROLE_NAME, ROLE_DESC, ROLE_PAYMENT)
VALUES ('Diretor(a)', 'Cargo responsável pela gestao e administracao do ambiente academico e seus principais processos', 8750.50),
('Auxiliar Docente', 'Cargo responsável pela manutenção, auxílio e suporte para as mais variadas situações que ocorrem mediante o tempo de curso.', 2290.50);

INSERT INTO USER_TBL (USER_RM, USER_FULL_NAME, USER_BIRTH_DATE, USER_CPF, USER_RG, USER_GENRE, USER_PHOTO, USER_EMAIL_PERS, USER_EMAIL_INST, USER_CEL, USER_TEL, INST_FK)
VALUES (0, 'ADMINISTRADOR DO SISTEMA', NOW(), '000.000.000-00', '00.000.000-0', 'O', '01.png', 'adminetecembu@gmail.com', 'adminetecembu@gmail.com', '(00)90000-0000', '(00)0000-0000', 1),
(21424, 'MARCOS COSTA DE SOUSA', NOW(), '100.000.000-00', '10.000.000-0', 'M', '02.png', 'marcos@gmail.com', 'marcos@etec.sp.gov.br', '(00)91000-0000', '(11)1000-0000', 1),
(17157, 'LUCAS CONCEICAO DA LUZ', NOW(), '200.000.000-00', '20.000.000-0', 'M', '03.png', 'lucasluzdev@gmail.com', 'lucas.luz21@etec.sp.gov.br', '(11)92000-0000', '(11)2000-0000', 1),
(18322, 'Luis Felipe dos Santos', NOW(), '300.000.000-00', '30.000.000-0', 'M', '04.png', 'luisfelipe@gmail.com', 'luis.felipe02@etec.sp.gov.br', '(11)93000-0000', '(11)3000-0000', 1);

INSERT INTO DOC_TBL (DOC_NAME, DOC_DESC, DOC_FILE, USER_FK)
VALUES ('dokumento', 'Declaração de matrícula do aluno(a) Lucas Conceição da Luz', '313.pdf', 3);

INSERT INTO LOGIN_TBL (USERNAME, PASSWD, USERTYPE, USER_FK)
VALUES ('admin', '123', 'A', 1),
('marcoscosta241', '123', 'T', 2),
('lucasluz241', '123', 'S', 3),
('luisfelipe242', '123', 'E', 3);

INSERT INTO STUDENT_TBL (STUDENT_ANSW, USER_FK)
VALUES (null, 3);

INSERT INTO COURSE_TBL (COURSE_NAME, COURSE_DESC, COURSE_HOURS, SEMESTRIES, MARKET, EIXOTEC_FK)
VALUES ('Desenvolvimento de Sistemas', 'O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.', 1500, 3, 'Empresas e departamentos de desenvolvimento de sistemas em organizações governamentais e não governamentais, podendo também atuar como profissional autônomo.', 1);

INSERT INTO COMP_TBL (COMP_NAME, COMP_DESC, COMP_HOURS, COURSE_FK)
VALUES ('Desenvolvimento do Trabalho de Conclusao de Curso (DTCC)', 'Componente responsavel pelo desenvolvimento do projeto para conclusao de curso', 40, 1);

INSERT INTO CLASS_TBL (CLASS_DATE, CLASS_DESC, COMP_FK)
VALUES ('2019/09/13', 'Prévia de apresentação do Trabalho de Conclusão de Curso(TCC)', 1);

INSERT INTO LESSION_TBL (LESSION_NAME, LESSION_DESC, LESSION_SIZE, LESSION_EXT, LESSION_FILE, COMP_FK)
VALUES ('Pitch', 'Documento com instruções de como realizar uma apresentação no modelo pitch.', 1201, 'pdf', '1.pdf', 1);

INSERT INTO ACTVT_TBL (ACTVT_NAME, ACTVT_DESC, STARTING_DATE, ENDING_DATE, CLASS_FK)
VALUES ('Apresentação para banca de TCC', 'Simulação de apresentação para banca de tcc com intuito de avaliação e definição de menção trimestral.', '2019/09/13', '2019/09/20', 1);

INSERT INTO PRSCLIST_TBL (PRSCLIST_DATE, PRSCLIST_BLOCK, CLASS_FK)
VALUES ('2019/09/13', 1, 1);

INSERT INTO TCHR_TBL (USER_FK)
VALUES (2);

INSERT INTO EMPL_TBL (USER_FK)
VALUES (4);

INSERT INTO ADDR_TBL (ADDR_CEP, ADDR_NAME, ADDR_NGH, ADDR_CITY, ADDR_STATE, USER_FK)
VALUES (06816250, 'Rua narumi nakayama 424', 'Jardim Nossa Senhora de Fátima', 'Embu das Artes', 'SP', 3);

INSERT INTO EVENT_TBL (EVENT_TITLE, EVENT_DESC, EVENT_START, EVENT_END, INST_FK)
VALUES ('Feira de profissões 2019/2', 'Feira de profissões para apresentação dos cursos da Etec de Embu', '2019/09/21', '2019/09/21', 1);

INSERT INTO ARTCL_TBL (ARTCL_TITLE, ARTCL_CONTENT, ARTCL_SLUG, INST_FK)
VALUES ('Vestibulinho para o primeiro semestre de 2020 está chegando!',  'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', 'vestibulinho-2020-chegando', 1);

INSERT INTO NTF_TBL (NTF_TITLE, NTF_CONTENT, INST_FK)
VALUES ('Atividade de banco de dados', 'Entregar atividade de banco de dados até dias 29/09.', 1);

INSERT INTO ROLE_EMPL_TBL (EMPL_FK, ROLE_FK)
VALUES (1,2); /* luis - auxiliar docente */

INSERT INTO INST_SVC_TBL (INST_FK, SVC_FK)
VALUES (1,1); /* SERVIÇOS DA INSTITUIÇÃO */

INSERT INTO INST_COURSE_TBL (INST_FK, COURSE_FK)
VALUES (1,1); /* cursos da instituição */

INSERT INTO TCHR_COMP_TBL (TCHR_FK, COMP_FK)
VALUES (1,1); /* componente do professor */

INSERT INTO COURSE_COMP_TBL (COURSE_FK, COMP_FK)
VALUES (1,1); /* COMPONENTE DO CURSO */

INSERT INTO PRSCLIST_STUDENT_TBL (PRSCLIST_FK, STUDENT_FK)
VALUES (1,1);  /* CHAMADA */

INSERT INTO NTF_ACTVT_TBL (NTF_FK, ACTVT_FK)
VALUES (1,1); /* NOTIFICAÇÃO DE ATIVIDADES */

INSERT INTO NTF_EVENT_TBL (NTF_FK, EVENT_FK)
VALUES (1,1); /* NOTIFICAÇÃO DE EVENTOS */

INSERT INTO NTF_LESSION_TBL (NTF_FK, LESSION_FK)
VALUES (1,1); /* NOTIFICAÇÃO DE MATERIAL */

INSERT INTO NTF_ARTCL_TBL (NTF_FK, ARTCL_FK)
VALUES (1,1); /* NOTIFICAÇÃO DE ARTIGOS */