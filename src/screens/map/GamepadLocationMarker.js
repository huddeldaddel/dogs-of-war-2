import React from "react";

export default function GamepadLocationMarker({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24">
      <path
        d={`M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 
                0-5.42-4.478-9.815-10-9.815zm1 
                17.932v-3.932h-2v3.932c-3.618-.453-6.479-3.315-6.931-6.932h3.931v-2h-3.931c.452-3.617 3.314-6.479
                6.931-6.931v3.931h2v-3.931c3.617.452 6.479 3.314 6.931 6.931h-3.931v2h3.931c-.452 3.617-3.314 
                6.479-6.931 6.932z`}
      />
    </svg>
  );
}
