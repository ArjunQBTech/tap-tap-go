import {Text} from '../../../constants/Text';
import Button from '../../common/Button'
import './index.css'

const Hero = () => {

    const styles = {
        backgroundImage : `url(${Text.home.hero.img})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
    }

    return(
        <section id='home' className="hero" style={styles}>
            <div className="hero_overlay"></div>
            <div className="hero_content">
                <div className="hero_title">{Text.home.hero.title}</div>
                <div className="hero_subtitle">{Text.home.hero.subtitle}</div>
                <div className="hero_cta">
                    <Button size="xl" title={Text.home.hero.cta}>{Text.home.hero.cta}</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero;