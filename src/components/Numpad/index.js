import React from 'react'
import Button from '../Button'

const Numpad = ({numClick}) => (
    <>
        <div className="row">
            <Button val={'1'} buttClick={numClick} />
            <Button val={'2'} buttClick={numClick} />
            <Button val={'3'} buttClick={numClick} />
            <Button val={'*'} buttType={'opr'} buttClick={numClick} />
        </div>
      
        <div className="row">
            <Button val={'4'} buttClick={numClick}/>
            <Button val={'5'} buttClick={numClick}/>
            <Button val={'6'} buttClick={numClick}/>
            <Button val={'/'} buttType={'opr'} buttClick={numClick}/>
        </div>

        <div className="row">
            <Button val={'7'} buttClick={numClick}/>
            <Button val={'8'} buttClick={numClick}/>
            <Button val={'9'} buttClick={numClick}/>
            <Button val={'-'} buttType={'opr'} buttClick={numClick}/>
        </div>

        <div className="row">
            <Button val={'0'} buttClick={numClick}/>
            <Button val={'.'} buttClick={numClick}/>
            <Button val={'c'} buttType={'clear'} buttClick={numClick}/>
            <Button val={'+'} buttType={'opr'} buttClick={numClick}/>
        </div>
    </>        
  )

  export default Numpad;