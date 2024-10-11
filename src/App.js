import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    <ul>
      {Object.entries(nestedObjected).map(([key, value]) => (
        <li key={key}>
          {key} :
          {typeof value === 'object' ? (
            <ul style={{ marginLeft: '20px' }}>
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>
                  {subKey}:
                  {typeof subValue === 'object' ? (
                    <ul style={{ marginLeft: '20px' }}>
                      {Object.entries(subValue).map(
                        ([subSubKey, subSubValue]) => (
                          <li key={subSubKey}>
                            {subSubKey}: {subSubValue}
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    subValue
                  )}
                </li>
              ))}
            </ul>
          ) : (
            value
          )}
        </li>
      ))}
    </ul>
  )
}

export default App

/* Alternatif Çözüm --> Katmanlı bir nesneyi (nestedObject) render etmek için, recursive (özyinelemeli) bir yaklaşım */
/*
const DisplayNested = ({ nestedObjected }) => {
  const renderObject = (obj) => {
    return Object.keys(obj).map((key) => {
      if (typeof obj[key] === 'object') {
        // Eğer değer nesneyse, recursive-yinelemeli-tekrarlayan olarak çağır
        return (
          <div key={key} style={{ marginLeft: '20px' }}>
            <strong>{key}:</strong>
            {renderObject(obj[key])} {/----> Recursive(Yinelemeli) render---/}
          </div>
        )
      } else {
        // Değer primitive bir tipse (string, number vs.), doğrudan render et
        return (
          <div key={key} style={{ marginLeft: '20px' }}>
            <strong>{key}:</strong> {obj[key]}
          </div>
        )
      }
    })
  }

  return <div>{renderObject(nestedObjected)}</div>
}

*/
