import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';


const CustomSlider = styled((props) => {

    return <Slider
        componentsProps={{
            className: 'thumb',
        }}
        {...props}
    />
})`
color: #feadde;

:hover {
    color: green;
}

& .thumb {
    border-radius: 16px;
}
`




const CustomSliderTheme = styled(Slider)((props) => {

    console.log('CustomSliderTheme', props)
    return `
      color: ${props.theme.palette.error.dark};
      box-shadow: ${props.theme.shadows[9]};
    `
})




export const StylesExample = () => {



    return <div>
        <CustomSlider defaultValue={10}/>
        <CustomSliderTheme defaultValue={20}/>
        <Slider defaultValue={30}/>
        <Slider defaultValue={40}/>
    </div>
}