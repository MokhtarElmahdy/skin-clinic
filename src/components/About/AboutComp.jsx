import React from 'react'

function AboutComp({len}) {
    len = Number(len)
    const ABOUT = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolor
    repellendus magnam, totam quos ratione eligendi repellat quibusdam
    impedit adipisci unde doloremque. Quo blanditiis recusandae nesciunt,
    expedita error soluta, asperiores, fugit numquam reprehenderit
    architecto ratione quos magnam saepe odit est alias. Mollitia quis eos
    eveniet cupiditate quisquam, dolorem suscipit sunt! Hic vitae
    quibusdam porro saepe, iusto dolores culpa incidunt mollitia,
    dignissimos quae minus id suscipit dolorum nemo tempore enim vel odit
    exercitationem dolore tenetur a! Delectus non quia enim molestiae
    nihil sit ratione, necessitatibus natus cupiditate iure beatae
    expedita neque quae nemo, dolorum laboriosam labore, nostrum
    doloremque ea vitae eum libero. Possimus debitis dicta dolor placeat
    tempora vitae adipisci incidunt. Accusamus molestias nisi nobis sequi
    velit sit odio at, voluptatibus fugit sapiente, ipsam expedita ab vero
    consectetur nam aut cum quidem vel aliquam ex! Dignissimos aut,
    doloribus inventore soluta non ex corrupti nesciunt a numquam commodi
    expedita! Dignissimos, inventore dolorum?`
  return (
    <p className="lead lh-lg">
    {len ? ABOUT.split('').slice(0,len).join('') : ABOUT}
  </p>
  )
}

export default AboutComp