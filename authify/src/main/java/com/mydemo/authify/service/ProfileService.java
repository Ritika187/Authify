package com.mydemo.authify.service;

import com.mydemo.authify.io.ProfileRequest;
import com.mydemo.authify.io.ProfileResponse;

public interface ProfileService {
     
   ProfileResponse createProfile(ProfileRequest request);

  ProfileResponse getProfile(String email);

  void sendResetOtp(String email);

  void resetPassword(String email, String otp, String newPassword);

  void sendOtp(String email);

  void verifyOtp(String email, String otp);

 
}
