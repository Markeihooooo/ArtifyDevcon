// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent } from "@dfinity/agent";
import Swal from "sweetalert2";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const [principalId, setPrincipalId] = useState(localStorage.getItem('principalId') || null);
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem('walletAddress') || null);

  // Utility function to calculate the account ID from principal
  const principalToAccountId = async (principal) => {
    const shaObj = new TextEncoder().encode(`\x0A${principal.toUint8Array().join("")} \x0A\0`);
    const hash = await crypto.subtle.digest("SHA-256", shaObj);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const connectPlugWallet = async () => {
    try {
      if (window.ic && window.ic.plug) {
        const connected = await window.ic.plug.requestConnect();
        if (connected) {
          const principal = await window.ic.plug.getPrincipal();
          const principalIdText = principal.toText();
          setPrincipalId(principalIdText);
          localStorage.setItem('principalId', principalIdText);

          const accountId = await principalToAccountId(principal);
          setWalletAddress(accountId);
          localStorage.setItem('walletAddress', accountId);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Connected to Plug Wallet',
            timer: 3000
          }).then(() => {
            localStorage.setItem('balance', 100000);
              window.location.href = "/";
          })
        } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'User rejected the connection request',
            });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Plug Wallet not found',
        })
      }
    } catch (error) {
      console.error('Error connecting to Plug Wallet:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('principalId');
    localStorage.removeItem('walletAddress');
    setPrincipalId(null);
    setWalletAddress(null);
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('images/back3.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="relative bg-white bg-opacity-30 p-10 rounded-lg shadow-lg text-center w-full max-w-lg backdrop-blur-sm">
        {/* Plug Wallet Login Button */}
        <button
          className="w-full py-3 px-5 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 text-white font-semibold rounded-md hover:scale-105 hover:shadow-[0_0_15px_rgba(255,105,180,0.9)] transition duration-200 flex items-center justify-center"
          onClick={connectPlugWallet}
        >
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
          เข้าสู่ระบบด้วย Plugwallet
        </button>
      </div>
    </div>
  );
};

export default Login;
