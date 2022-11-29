import copyIcon from '../../assets/copyIcon.svg';

function ExcuseContainer({
  generatedExcuse,
  value,
  setValue,
  copied,
  setCopied,
  handleSubmit,
  setUserPromt,
  temp,
  setTemp,
}) {
  return (
    <>
      <div className='excuseContainer'>
        <div className='excuseEmojiContainer'>
          {value === 'party'
            ? '🎉'
            : value === 'family'
            ? '👪'
            : value === 'developer'
            ? '💻'
            : value === 'college'
            ? '🎓'
            : value === 'funny'
            ? '🤡'
            : value === 'exaggerated'
            ? '🤯'
            : value === 'gamer'
            ? '🎮'
            : '💼'}
        </div>
        <label htmlFor='excuse' className='excuseLabel'>
          <select
            onChange={(e) => setValue(e.target.value)}
            name='excuse'
            id='excuse'
            className='excuseSelect'
          >
            <option value='office'>Office Excuses</option>
            <option value='family'>Gatherings Excuses</option>
            <option value='party'>Party Excuses</option>
            <option value='developer'>Developer Excuses</option>
            <option value='gamer'>Gamer Excuses</option>
            <option value='college'>College Excuses</option>
            <option value='funny'>Funny Excuses</option>
            <option value='exaggerated'>Exaggerated Excuses</option>
          </select>
        </label>
        <label htmlFor='userPromt' className='wishesLabel'>
          <input
            className='wishesSelect'
            id='userPromt'
            type='text'
            placeholder={`For: ${
              value === 'family'
                ? 'A family gathering'
                : value === 'party'
                ? 'My friends 28th birthday'
                : value === 'developer'
                ? 'A computer Error'
                : value === 'gamer'
                ? 'Too much ping'
                : value === 'college'
                ? 'My exam physics tomorrow'
                : value === 'funny'
                ? 'Alien abduction'
                : value === 'exaggerated'
                ? 'A meteor hit'
                : 'being late to work'
            }`}
            onChange={(e) => setUserPromt(e.target.value)}
          />
        </label>
        <div className='rangeSlider'>
          <div className='rangeInfo'>
            <p className='tempInfo'>Formal</p>
            <p className='tempInfo'>{temp}</p>
            <p className='tempInfo'>Creative</p>
          </div>
          <input
            type='range'
            min={0}
            max={1}
            step={0.01}
            value={temp}
            onChange={(e) => setTemp(e.target.value * 1)}
            className='slider'
          />
        </div>

        <button className='excuseFetchButton' onClick={handleSubmit}>
          Generate Excuse
        </button>
        <div
          className='generatedExcuseCotainer'
          onClick={(e) => {
            if (generatedExcuse.length > 0) {
              navigator.clipboard.writeText(generatedExcuse);

              setCopied(true);

              setTimeout(() => {
                setCopied(false);
              }, 5000);
            }
          }}
        >
          <p className='generatedExcuse'>{generatedExcuse}</p>
          {copied && <p className='excuseCopyPopUp'>Text Copied!</p>}
        </div>
        <button
          className='excuseCopyButton'
          onClick={() => {
            if (generatedExcuse.length > 0) {
              navigator.clipboard.writeText(generatedExcuse);

              setCopied(true);

              setTimeout(() => {
                setCopied(false);
              }, 5000);
            }
          }}
        >
          <img src={copyIcon} />
        </button>
      </div>
    </>
  );
}

export default ExcuseContainer;
