import {
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Slide,
    Box,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import "../Login/styles/loginStyle.css";
import Cuadro from "../Login/assets/CuadroRegistro.png";
import Robot from "../Login/assets/RobotInicio.png";
import styled from "@emotion/styled";
import route from "ziggy-js";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import MuiAlert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

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

const Register = () => {
    useEffect(() => {
        document.title = "AxeNet - Registro";
    }, []);

    const { errors, status } = usePage().props;
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: false,
        image: null,
        name: "",
        bornDate: null,
        phone: "",
        address: "",
        password_confirm: "",
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

    //Para lo de las imagenes
    const [imageUrl, setImageUrl] = useState("/images/default.png");

    function updatePhoto(e) {
        setValues((values) => ({
            ...values,
            image: e.target.files[0],
        }));
    }

    useEffect(() => {
        if (values.image) {
            setImageUrl(URL.createObjectURL(values.image));
        }
    }, [values.image]);

    const handleChangeDate = (newValue) => {
        setValues((values) => ({
            ...values,
            bornDate: newValue,
        }));
    };

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
                                <div className="container-inputs-register">
                                    <form
                                        onSubmit={handleSubmit}
                                        ref={ref}
                                        id="login-form"
                                        style={{ padding: 10 }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid
                                                item
                                                xs={4}
                                                textAlign="center"
                                            >
                                                <Box mt={2} textAlign="center">
                                                    <img
                                                        src={imageUrl}
                                                        alt={"avatar"}
                                                        height="120px"
                                                        width={"120px"}
                                                        style={{
                                                            borderRadius: "8px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </Box>
                                                <input
                                                    accept="image/*"
                                                    type="file"
                                                    id="select-image"
                                                    style={{ display: "none" }}
                                                    onChange={(e) =>
                                                        updatePhoto(e)
                                                    }
                                                />
                                                <label htmlFor="select-image">
                                                    <Button
                                                        variant="text"
                                                        component="span"
                                                        sx={{
                                                            color: "#FFFFFF",
                                                        }}
                                                    >
                                                        EDITAR FOTO
                                                    </Button>
                                                </label>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <LoginTextField
                                                    id="name"
                                                    required
                                                    label="NOMBRE COMPLETO"
                                                    type="text"
                                                    fullWidth={true}
                                                    sx={{
                                                        marginTop: 4,
                                                        input: {
                                                            color: "white",
                                                        },
                                                        label: {
                                                            color: "white",
                                                        },
                                                    }}
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                                <LocalizationProvider
                                                    dateAdapter={AdapterMoment}
                                                >
                                                    <DesktopDatePicker
                                                        label="FECHA DE NACIMIENTO"
                                                        inputFormat="DD/MM/yyyy"
                                                        disableFuture
                                                        openTo="year"
                                                        value={values.bornDate}
                                                        onChange={
                                                            handleChangeDate
                                                        }
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <LoginTextField
                                                                {...params}
                                                                sx={{
                                                                    marginTop: 2,
                                                                    input: {
                                                                        color: "white",
                                                                    },
                                                                    label: {
                                                                        color: "white",
                                                                    },
                                                                }}
                                                                fullWidth={true}
                                                                required
                                                            />
                                                        )}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>
                                        </Grid>
                                        <LoginTextField
                                            id="email"
                                            required
                                            label="CORREO ELECTRÓNICO"
                                            type="email"
                                            fullWidth={true}
                                            sx={{
                                                marginTop: 1,
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
                                            id="phone"
                                            required
                                            label="TELÉFONO CELULAR"
                                            type="phone"
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
                                            value={values.phone}
                                            onChange={handleChange}
                                        />
                                        <LoginTextField
                                            id="address"
                                            required
                                            label="DIRECCIÓN"
                                            type="address"
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
                                            value={values.address}
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
                                                marginTop: 2,
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
                                        <LoginTextField
                                            id="password_confirm"
                                            className={"i"}
                                            required
                                            label="CONFIRMAR CONTRASEÑA"
                                            type="password"
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
                                            value={values.password_confirm}
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
                                    label="ACEPTO TÉRMINOS Y CONDICIONES"
                                    sx={{
                                        color: "#3a3a3a",
                                        span: {
                                            fontSize: "14px",
                                            fontWeight: 600,
                                        },
                                    }}
                                />

                                <CustomButton
                                    variant="contained"
                                    sx={{
                                        marginTop: 1,
                                        backgroundColor: "#3a3a3a",
                                    }}
                                    type="submit"
                                    form="login-form"
                                >
                                    REGISTRARME
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

export default Register;
