import {
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Slide,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import "./styles/loginStyle.css";
import Cuadro from "./assets/CuadroRegistro.png";
import XInicio from "./assets/XInicio.png";
import Robot from "./assets/RobotInicio.png";
import styled from "@emotion/styled";
import route from "ziggy-js";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import MuiAlert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
});

const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "10px 18px",
    border: "1px solid",
    borderRadius: 10,
    lineHeight: 1.5,
    backgroundColor: "##3a3a3a",
    borderColor: "#3a3a3a",
    "&:hover": {
        backgroundColor: "#1a1a1a",
        borderColor: "1a1a1a",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#1a1a1a",
        borderColor: "#1a1a1a",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
});

const Login = () => {
    useEffect(() => {
        document.title = "AxeNet - Login";
    }, []);

    const { errors, status } = usePage().props;
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false,
        error: false,
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleChangeRemember = (event) => {
        setValues((values) => ({
            ...values,
            remember: event.target.checked,
        }));
    };

    const ref = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("login"), values, {
            onError: () => {
                // Inertia.reload({ only: ['cursos'], data: { regime: values.regimen } })
                setValues((values) => ({
                    ...values,
                    error: false,
                }));
                setValues((values) => ({
                    ...values,
                    error: true,
                }));
            },
        });
    }

    const containerRef = useRef(null);
    //FLASH Y ALERTS
    const { flash } = usePage().props;

    const [open, setOpen] = React.useState({
        tipo: null,
    });
    const [alert, setAlert] = React.useState({
        openError: flash.error ? true : false,
        error: flash.error,
        openWarning: flash.message ? true : false,
        warning: flash.message,
        openSuccess: flash.success ? true : false,
        success: flash.success,
    });

    //detecta cuando un nuevo mensaje es recibido, cierra todas las alertas y cambia el mensaje
    useEffect(() => {
        if (flash.error) {
            setAlert((state) => ({
                ...state,
                openError: false,
                error: flash.error,
                openWarning: false,
                openSuccess: false,
            }));
            setTimeout(function () {
                setOpen({ tipo: "error" });
            }, 100);
        } else if (flash.success) {
            setAlert((state) => ({
                ...state,
                openError: false,
                openWarning: false,
                openSuccess: false,
                success: flash.success,
            }));
            setTimeout(function () {
                setOpen({ tipo: "success" });
            }, 100);
        } else if (flash.message) {
            setAlert((state) => ({
                ...state,
                openError: false,
                openWarning: false,
                warning: flash.message,
                openSuccess: false,
            }));
            setTimeout(function () {
                setOpen({ tipo: "warning" });
            }, 100);
        }
    }, [flash]);

    //abre de nuevo la alerta
    useEffect(() => {
        switch (open.tipo) {
            case "error":
                setAlert((state) => ({
                    ...state,
                    openError: true,
                }));
                setOpen({ tipo: null });
                break;
            case "success":
                setAlert((state) => ({
                    ...state,
                    openSuccess: true,
                }));
                setOpen({ tipo: null });
                break;
            case "warning":
                setAlert((state) => ({
                    ...state,
                    openWarning: true,
                }));
                setOpen({ tipo: null });
                break;
            default:
                break;
        }
    }, [open]);

    return (
        <div className="fondo">
            <Container>
                <Grid container className="grid-login">
                    <Grid
                        item
                        xs={0}
                        md={7}
                        style={{
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                        }}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <img src={Robot} alt="Robot" className="robot-img" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Paper
                            elevation={16}
                            square
                            className="login-paper"
                            ref={containerRef}
                        >
                            <div>
                                <div className="header-login">
                                    <img
                                        src={XInicio}
                                        alt="img"
                                        height={"80px"}
                                    />
                                    <InertiaLink
                                        href={route("register")}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="text"
                                            href={route("register")}
                                            sx={{
                                                fontSize: "25px",
                                                padding: 0,
                                                height: "30px",
                                                color: "#FFFFFF",
                                                marginTop: 1,
                                                fontWeight: 600,
                                            }}
                                        >
                                            REGISTRO
                                        </Button>
                                    </InertiaLink>
                                </div>

                                <div className="container-inputs-login">
                                    <form
                                        onSubmit={handleSubmit}
                                        ref={ref}
                                        id="login-form"
                                    >
                                        <LoginTextField
                                            id="email"
                                            className={"i"}
                                            required
                                            label="CORREO ELECTRÓNICO"
                                            type="email"
                                            fullWidth={true}
                                            sx={{
                                                marginTop: 2,
                                                input: {
                                                    color: "white",
                                                },
                                                label: {
                                                    color: "white",
                                                },
                                            }}
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <LoginTextField
                                            id="password"
                                            className={"i"}
                                            required
                                            label="CONTRASEÑA"
                                            type="password"
                                            fullWidth={true}
                                            sx={{
                                                marginTop: 5,
                                                input: {
                                                    color: "white",
                                                },
                                                label: {
                                                    color: "white",
                                                },
                                            }}
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                    </form>

                                    {/* SUCCESS */}
                                    {status && (
                                        <Slide
                                            direction="right"
                                            in={true}
                                            container={containerRef.current}
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                                className="error-grid success-grid"
                                            >
                                                <CheckCircleOutlineIcon
                                                    style={{
                                                        fontSize: "19px",
                                                        color: "#B5FF93",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {status}
                                            </Grid>
                                        </Slide>
                                    )}

                                    {/* ERROR    */}
                                    {values.error && (
                                        <Slide
                                            direction="right"
                                            in={true}
                                            container={containerRef.current}
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                                className="error-grid"
                                            >
                                                <ErrorOutlineIcon
                                                    style={{
                                                        fontSize: "19px",
                                                        color: "#2196F3",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                ERROR: {errors.email}
                                            </Grid>
                                        </Slide>
                                    )}

                                    {alert.success && (
                                        <Slide
                                            direction="right"
                                            in={true}
                                            container={containerRef.current}
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                                className="error-grid success-grid"
                                            >
                                                <CheckCircleOutlineIcon
                                                    style={{
                                                        fontSize: "19px",
                                                        color: "#B5FF93",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {alert.success}
                                            </Grid>
                                        </Slide>
                                    )}
                                </div>
                            </div>
                            <div className="login-buttons-container">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.remember}
                                            onChange={handleChangeRemember}
                                            inputProps={{
                                                "aria-label": "controlled",
                                            }}
                                            sx={{
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                            }}
                                        />
                                    }
                                    label="RECORDARME"
                                    sx={{
                                        color: "#3a3a3a",
                                        span: {
                                            fontSize: "14px",
                                            fontWeight: 600,
                                        },
                                    }}
                                />
                                <InertiaLink
                                    href={route("password.request")}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        variant="text"
                                        href={route("password.request")}
                                        sx={{
                                            color: "#3a3a3a",
                                            marginTop: 1,
                                            fontWeight: 600,
                                        }}
                                    >
                                        RECUPERAR CONTRASEÑA
                                    </Button>
                                </InertiaLink>

                                <CustomButton
                                    variant="contained"
                                    sx={{
                                        marginTop: 1,
                                        backgroundColor: "#3a3a3a",
                                    }}
                                    type="submit"
                                    form="login-form"
                                >
                                    INICIAR SESIÓN
                                </CustomButton>
                            </div>
                            <div className="login-square">
                                <img
                                    src={Cuadro}
                                    alt="img"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;
