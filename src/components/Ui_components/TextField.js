import React, { useEffect, useMemo, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, styled, TextField as MUITextField, useTheme } from '@mui/material'
const CustomTextField = styled(MUITextField)((props) => ({
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor:'rgba(145, 158, 171, 0.32)',
			borderRadius: '0.5rem',
			'& legend': {
				width: props.label ? 'auto' : 'unset'
			}
		},
	},
	'& .MuiInput-underline:before': {
		borderWidth: 0,
		borderBottom: 'none',
	}
}))

const TextField = (props) => {
	const [showPassword, setShowPassword] = useState(false)
	const theme = useTheme()
	const type = useMemo(() => {
		if(props.type === 'password') {
			if(showPassword) {
				return 'text'
			} else {
				return 'password'
			}
		} else {
			return props.type
		}
	}, [props.type, showPassword])

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}


	useEffect(() => {
		props.type === 'password' && setShowPassword(false)
	}, [props.type])
	return (
			<CustomTextField
				{...props}
				variant={props.fieldVarient ? props.fieldVarient : 'outlined'}
				type={type}
				autoComplete={props.type === 'password' ? 'password' : undefined}
				InputProps={
					{
						startAdornment: props.startIcon,
						endAdornment: props.type === 'password' ? (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => setShowPassword(!showPassword)}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						) : props.endIcon || null
					}
				}
			/>
	)
}

export default TextField