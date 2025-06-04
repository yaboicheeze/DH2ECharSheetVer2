import { InputNumber } from 'antd';

import '../styles/Header.css'

export default function HeaderBar() {
    return (
        <div className='header-bar'>
            <div className='title-container'>
                <h1 id='character-name'>Character Name</h1>
                <hr></hr>
                <h3 id='character-class'>Character Class</h3>
            </div>

            <div className='quick-stats-container'>
                {/* Experience Points */}
                <div className='over-header-input-container'>
                    <h3>Experience Points</h3>
                    <div className='header-input-container'>
                        <div className='input-and-text'>
                            <label htmlFor="xp-available">XP Available</label>
                            <InputNumber id="xp-available" className='header-input' defaultValue={0} />
                        </div>

                        <span>/</span>

                        <div className='input-and-text'>
                            <label htmlFor="xp-total">Total XP</label>
                            <InputNumber id="xp-total" className='header-input' defaultValue={0} />
                        </div>
                    </div>
                </div>

                {/* Fate Points */}
                <div className='over-header-input-container'>
                    <h3>Fate Points</h3>
                    <div className='header-input-container'>
                        <div className='input-and-text'>
                            <label htmlFor="fate-available">Available</label>
                            <InputNumber id="fate-available" className='header-input' defaultValue={0} />
                        </div>

                        <span>/</span>

                        <div className='input-and-text'>
                            <label htmlFor="fate-total">Total</label>
                            <InputNumber id="fate-total" className='header-input' defaultValue={0} />
                        </div>
                    </div>
                </div>

                {/* Fatigue */}
                <div className='over-header-input-container'>
                    <h3>Fatigue</h3>
                    <div className='header-input-container'>
                        <div className='input-and-text'>
                            <label htmlFor="fatigue-available">Current</label>
                            <InputNumber id="fatigue-available" className='header-input' defaultValue={0} />
                        </div>

                        <span>/</span>

                        <div className='input-and-text'>
                            <label htmlFor="fatigue-total">Limit</label>
                            <InputNumber id="fatigue-total" className='header-input' defaultValue={0} readOnly />
                        </div>
                    </div>
                </div>

                {/* Hit Points */}
                <div className='over-header-input-container'>
                    <h3>Hit Points</h3>
                    <div className='header-input-container'>
                        <div className='input-and-text'>
                            <label htmlFor="hp-available">Current</label>
                            <InputNumber id="hp-available" className='header-input' defaultValue={0} />
                        </div>

                        <span>/</span>

                        <div className='input-and-text'>
                            <label htmlFor="hp-total">Total</label>
                            <InputNumber id="hp-total" className='header-input' defaultValue={0} />
                        </div>
                        <div className='input-and-text'>
                            <label htmlFor="critical-total">Critical HP</label>
                            <InputNumber id="critical-total" className='critical-input' defaultValue={10} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}