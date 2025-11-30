import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiEdit, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-hot-toast";
import { getProfile } from "../../api/Profile"; // Assuming you have a getProfile API function
import { updateProfile } from "../../api/UpdateProfile"; // Assuming you have an updateProfile API function
import { changePassword } from "../../api/ChangePassword"; // Assuming you have a changePassword API function

const EditProfile = () => {
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("User1");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [debugInfo, setDebugInfo] = useState("Initial state");

  const onAvatarClick = () => {
    fileInputRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const openPasswordModal = () => setPasswordModalOpen(true);
  const closePasswordModal = () => setPasswordModalOpen(false);

  const handlePasswordChange = async () => {
    try {
      if (newPass !== confirmPass) {
        toast.error("Mật khẩu mới không trùng khớp");
        return;
      }

      await changePassword(currentPass, newPass);
      toast.success("Đổi mật khẩu thành công");
      closePasswordModal();
      setCurrentPass("");
      setNewPass("");
      setConfirmPass("");
    } catch (error) {
      toast.error("Đổi mật khẩu thất bại");
      console.error("Đổi mật khẩu lỗi:", error);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const payload = {
        name,
        email,
        phone,
      };
      const res = await updateProfile(payload);
      toast.success("Cập nhật hồ sơ thành công");
      setIsEditMode(false); // Switch back to view mode after saving
    } catch (error) {
      toast.error("Lỗi khi cập nhật hồ sơ");
      console.error("Chi tiết lỗi:", error?.response?.data || error);
    }
  };

  const handleEditClick = () => {
    setDebugInfo("Edit button clicked");
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    fetchProfile();
  };

  const fetchProfile = async () => {
    try {
      console.log("Fetching profile...");
      const data = await getProfile(); // Remove token parameter as it's handled by interceptor
      console.log("Profile data received:", data);
      setName(data.name || "");
      setEmail(data.email || "");
      setPhone(data.phone || "");
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error("Không thể lấy hồ sơ người dùng");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-1/2 flex justify-center">
      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 right-0 bg-yellow-100 p-2 text-xs z-50">
          Debug: {debugInfo} | Edit mode: {isEditMode.toString()}
        </div>
      )}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Hồ Sơ Cá Nhân</h2>
          {!isEditMode && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Edit button clicked");
                handleEditClick();
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center z-10 relative"
              type="button"
            >
              <FiEdit className="mr-2" />
              Chỉnh sửa
            </button>
          )}
        </div>

        {/* <div className="bg-gradient-to-r from-green-500 to-green-800 p-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <CgProfile size={72} className="text-gray-500" />
              )}
            </div>
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full flex items-center"
              onClick={onAvatarClick}
            >
              <FiEdit className="mr-1" />
              Sửa
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
            />
          </div>
        </div> */}

        <div className="p-6 space-y-4">
          <div className="flex items-center">
            <label className="w-24 font-medium">Họ và tên</label>
            {isEditMode ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 border rounded-md px-4 py-2 shadow-sm"
              />
            ) : (
              <div className="flex-1 px-4 py-2">{name}</div>
            )}
          </div>
          <div className="flex items-center">
            <label className="w-24 font-medium">Email</label>
            {isEditMode ? (
              <input
                type="email"
                value={email}
                placeholder="Nhập mail"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border rounded-md px-4 py-2 shadow-sm"
              />
            ) : (
              <div className="flex-1 px-4 py-2">{email}</div>
            )}
          </div>
          <div className="flex items-center">
            <label className="w-24 font-medium">Số điện thoại</label>
            {isEditMode ? (
              <input
                type="tel"
                value={phone}
                placeholder="Nhập Số Điện Thoại"
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 border rounded-md px-4 py-2 shadow-sm"
              />
            ) : (
              <div className="flex-1 px-4 py-2">{phone}</div>
            )}
          </div>
          <div className="flex items-center">
            <label className="w-24 font-medium">Mật khẩu</label>
            <div className="flex-1 relative">
              <input
                type="password"
                value="********"
                readOnly
                className="w-full border rounded-md px-4 py-2 shadow-sm"
              />
              <button
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={openPasswordModal}
              >
                <FiEdit />
              </button>
            </div>
          </div>
        </div>

        {isEditMode && (
          <div className="p-4 flex justify-end border-t space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Cancel button clicked");
                handleCancelEdit();
              }}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
              type="button"
            >
              Hủy
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Save button clicked");
                handleSaveProfile();
              }}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              type="button"
            >
              Lưu
            </button>
          </div>
        )}

        {passwordModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Đổi Mật Khẩu</h3>
                <button onClick={closePasswordModal}>
                  <FiX size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <input
                  type="password"
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  placeholder="Mật khẩu hiện tại"
                  className="w-full border rounded-md px-4 py-2 shadow-sm"
                />
                <input
                  type="password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="Mật khẩu mới"
                  className="w-full border rounded-md px-4 py-2 shadow-sm"
                />
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  placeholder="Nhập lại mật khẩu mới"
                  className="w-full border rounded-md px-4 py-2 shadow-sm"
                />
                <button
                  onClick={handlePasswordChange}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                  Đổi Mật Khẩu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
