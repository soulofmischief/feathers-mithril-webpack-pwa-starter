/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 100 100" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M93.935 42.092c-.032-12.063.218-24.132-.07-36.19-1.463-6.252-9.377-3.92-12.582-.427C71.322 13.15 61.32 20.84 50.6 27.437c-3.717.101-6.413-3.845-9.612-5.594C32.682 15.8 24.817 9.14 16.34 3.341 12.606.605 6.442 2.327 6.112 7.355c-.37 6.945.26 13.92.173 20.881.027 22.583.79 45.176-.022 67.752 1.471 4.874 8.548-.66 10.687-2.876 2.125-4.672.91-10.098 1.21-15.1.175-19.395.242-38.801-.125-58.191 3.806 1.837 7.84 5.237 11.469 7.984 4.574 3.757 9.446 7.178 14.006 10.925-.216 15.19-.123 30.394.103 45.576.51 3.92 9.878 5.816 8.998.224.073-16.145-.124-32.36-.189-48.461 8.94-5.755 17.543-12.035 26.165-18.25 1.64-.523 6.298-6.46 6.384-2.773.356 22.126 1.134 44.261.307 66.388-.185 2.788.195 5.673-.167 8.421-3.898-.012-7.763-1.787-11.746-1.835-2.115-.215-9.224.265-6.743 3.376 5.065 2.482 10.772 3.378 16.161 4.983 3.564.745 10.63 4.192 10.732-2.042.416-17.411.421-34.83.42-52.245z"/>
    <path d="M76.286 55.959c-1.839-6.945 8.938-2.703 5.29 2.144-1.856 1.78-4.982.24-5.29-2.144z"/>
  </svg>
)