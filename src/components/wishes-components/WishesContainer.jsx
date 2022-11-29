import copyIcon from '../../assets/copyIcon.svg';

function WishesContainer({
  generatedWish,
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
      <div className='wishesContainer'>
        <div className='wishesEmojiContainer'>
          {value === 'party' ? '🎉' : value === 'office' ? '💼' : '👪'}
        </div>
        <label htmlFor='excuse' className='wishesLabel'>
          <select
            onChange={(e) => setValue(e.target.value)}
            name='excuse'
            id='excuse'
            className='wishesSelect'
          >
            <option value='family'>Gatherings Wishes</option>
            <option value='office'>Office Wishes</option>
            <option value='party'>Party Wishes</option>
          </select>
        </label>
        <label htmlFor='userPromt' className='wishesLabel'>
          <input
            className='wishesSelect'
            id='userPromt'
            type='text'
            placeholder={`For: ${
              value === 'office'
                ? "My colleague's promotion"
                : value === 'party'
                ? 'My friends 28th birthday'
                : 'My cousin who won the lottery'
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

        <button className='wishesFetchButton' onClick={handleSubmit}>
          Generate Wishes
        </button>
        <div
          className='generatedWishesCotainer'
          onClick={(e) => {
            if (generatedWish.length > 0) {
              navigator.clipboard.writeText(generatedWish);

              setCopied(true);

              setTimeout(() => {
                setCopied(false);
              }, 5000);
            }
          }}
        >
          <p className='generatedWishes'>{generatedWish}</p>
          {copied && <p className='wishesCopyPopUp'>Text Copied!</p>}
        </div>
        <button
          className='wishesCopyButton'
          onClick={() => {
            if (generatedWish.length > 0) {
            navigator.clipboard.writeText(generatedWish);

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

export default WishesContainer;
